export class UtilsService {

  static async copyTextToClipboard(text: string): Promise<any> {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

}