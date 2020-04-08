interface Reg {
  SUGAR_DATA: RegExp
}

interface Replacer {
  REG: Reg,
  dataRender(cnt: string, data: {[key: string]: string}): string
}

declare const replacer: Replacer

export=replacer