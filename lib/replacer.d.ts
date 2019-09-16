interface IReg {
  SUGAR_DATA: RegExp
}

interface IReplacer {
  REG: IReg,
  dataRender(cnt: string, data: {[key: string]: string}): string
}

declare const replacer: IReplacer

export=replacer