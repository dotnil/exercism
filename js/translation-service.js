export class TranslationService {
  constructor(api) {
    this.api = api
  }

  free(text) {
    return this.api.fetch(text).then(obj => obj.translation)
  }

  batch(texts) {
    return new Promise((resolve) => {
      if (texts.length === 0) { throw new BatchIsEmpty() }

      const promises = texts.map(text => this.free(text))
      resolve(Promise.all(promises).then(values => values))
    })
  }


  request(text) {
    return this.retryRequest(text, 2)
  }

  retryRequest(text, tries) {
    return new Promise((resolve, reject) => {
      this.api.request(text, result => {
        if (result === undefined) { return resolve(undefined) }
        if (tries == 0) { return reject(result) }

        resolve(this.retryRequest(text, tries - 1))
      })
    })
  }


  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
    return this
      .fetchWithMinimumQuality(text, minimumQuality)
      .catch(error => {
        console.log(error)
        if (error instanceof QualityThresholdNotMet) {
          throw error
        } else {
          return this.request(text).then(() => this.fetchWithMinimumQuality(text, minimumQuality))
        }
      })
  }

  fetchWithMinimumQuality(text, minimumQuality) {
    return this.api.fetch(text).then(obj => {
      console.log(obj)
      if (obj.quality >= minimumQuality) {
        return obj.translation
      }

      throw new QualityThresholdNotMet()
    })
  }


}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    )

    this.text = text
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    )
  }
}
