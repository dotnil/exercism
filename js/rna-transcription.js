// https://exercism.org/tracks/javascript/exercises/rna-transcription/solutions/dotnil

const rnaTranscription = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export const toRna = dna => dna.split('').map(nucleotide => rnaTranscription[nucleotide]).join('')
