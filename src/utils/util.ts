export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export function LimitText(text:string, limit:number) {
  if (text !== undefined && text.length > limit) {
    return text.substring(0, limit) + '...';
  }
  return text;
}

export function textUpper(text:string) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();;
}