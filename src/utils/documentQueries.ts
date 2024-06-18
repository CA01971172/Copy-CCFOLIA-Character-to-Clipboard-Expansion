/* ココフォリアページの要素のクエリの文字列 */
// 入力フォーム
const formQuery: string = "#root > div > div.MuiDrawer-root > div > div form";

// メッセージ入力フォームの名前欄
export const nameFormQuery: string = `${formQuery} > div:nth-child(2) > div:nth-child(1) > div > input`;

// カラーパレットアイコン
export const colorIconQuery: string = `${formQuery} > div:nth-child(2) > div:nth-child(4) > button > svg`;

// キャラクター編集メニュー
const editMenuQuery: string = "body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div";

// キャラクター編集メニューの一番上の「キャラクター編集」見出し
export const editHeaderQuery: string = `${editMenuQuery} > header > div > p`;

// キャラクター編集メニューの入力内容
export const nameQuery: string = `${editMenuQuery} input[name=name]`; // キャラクター名
export const initiativeQuery: string = `${editMenuQuery} input[name=initiative]`; // イニシアチブ
export const memoQuery: string = `${editMenuQuery} textarea[name=memo]`; // キャラクターメモ
export const sizeQuery: string = `${editMenuQuery} input[name=width]`; // 駒サイズ
export const xQuery: string = `${editMenuQuery} input[name=x]`; // x
export const yQuery: string = `${editMenuQuery} input[name=y]`; // y
export const externalUrlQuery: string = `${editMenuQuery} input[name=externalUrl]`; // 参照URL
export const commandsQuery: string = `${editMenuQuery} textarea[name=commands]`; // チャットパレット
export const iconUrlQuery: string = `${editMenuQuery} form > div:nth-child(1) > div:nth-child(1) > button > div > img`; // キャラアイコン
export const facesQuery: string = `${editMenuQuery} form > div:nth-child(2)`; // 表情差分一覧
export const statusQuery: string = `${editMenuQuery} form > div:nth-child(3)`; // ステータス一覧
export const paramsQuery: string = `${editMenuQuery} form > div:nth-child(4)`; // パラメータ一覧
const slideBarsQuery: string = `${editMenuQuery} form ul`;
export const secretQuery: string = `${slideBarsQuery} li:nth-child(1) input`; // ステータスを非公開にする
export const invisibleQuery: string = `${slideBarsQuery} li:nth-child(2) input`; // 発言時キャラクターを表示しない
export const hideStatusQuery: string = `${slideBarsQuery} li:nth-child(3) input`; // 盤面キャラクター一覧に表示しない
