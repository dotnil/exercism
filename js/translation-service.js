export class TranslationService {
  constructor(api) {
    this.api = api
  }

  async free(text) {
    try {
      const response = await this.api.fetch(text)
      return response.translation
    }
    catch(error) {
      return Promise.reject(error)
    }
  }

  async batch(texts) {
    try {
      if (texts.length === 0) { throw new BatchIsEmpty }
      const promises = texts.map(text => this.free(text))
      return await Promise.all(promises)
    }
    catch(error) {
      return Promise.reject(error)
    }
  }



}
