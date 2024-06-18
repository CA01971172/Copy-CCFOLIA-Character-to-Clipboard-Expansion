import { nameFormQuery } from "./documentQueries";

//テキストデータをクリップボードに出力する関数
export function exportToClipboard(text: string){
    if(navigator.clipboard){//サポートしているかを確認
        navigator.clipboard.writeText(text)//クリップボードに出力
    }
}

// 選択中のキャラ名を変更する関数
export function changeName(characterName: string, isDo: boolean = true): boolean {
    const nameElm = document.querySelector<HTMLInputElement>(nameFormQuery) as HTMLInputElement;
    if (nameElm?.value !== characterName) {
        if(isDo) overrideFormValue(nameElm, characterName);
        return true;
    }else{
        return false;
    }
}

// フォームのinput要素等の既存の入力内容を削除する関数
function clearFormValue(element: HTMLInputElement|HTMLTextAreaElement) :void{
    element.focus();
    document.execCommand("selectAll", false);
    document.execCommand("removeFormat", false);
}

// フォームのinput要素等に内容を入力する関数
function addFormValue(element: HTMLInputElement|HTMLTextAreaElement, value: string): void{
    element.focus();
    document.execCommand('insertText', false, value);
}

// フォームのinput要素等の内容を上書きする関数
function overrideFormValue(element: HTMLInputElement|HTMLTextAreaElement, value: string): void{
    clearFormValue(element);
    addFormValue(element, value);
}
