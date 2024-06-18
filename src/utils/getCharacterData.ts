import { nameQuery, initiativeQuery, externalUrlQuery, iconUrlQuery, commandsQuery, memoQuery, /* xQuery, yQuery,  */sizeQuery, secretQuery, facesQuery, statusQuery, paramsQuery } from "./documentQueries";
import { CharacterInfo, FaceInfo, ParamInfo, StatusInfo } from "./types";

// キャラクター編集メニューの入力内容を取得し、キャラクターコマのJSON形式データを返す関数
export function getCharacterData(): CharacterInfo{
    // キャラ名を取得する
    const name: string = (document.querySelector(nameQuery) as HTMLInputElement | null)?.value || "";

    // イニシアチブを取得する
    const initiative: number = Number((document.querySelector(initiativeQuery) as HTMLInputElement | null)?.value) || 0;

    // 参照URLを取得する
    const externalUrl: string = (document.querySelector(externalUrlQuery) as HTMLInputElement | null)?.value || "";

    // キャラクターアイコンを取得する
    const iconUrl: string = (document.querySelector(iconUrlQuery) as HTMLSourceElement | null)?.src || "";

    // チャットパレットを取得する
    const commands: string = (document.querySelector(commandsQuery) as HTMLTextAreaElement | null)?.value || "";

    // キャラクターメモを取得する
    const memo: string = (document.querySelector(memoQuery) as HTMLTextAreaElement | null)?.value || "";

    // キャラコマの座標を取得する
    // const x: number = Number((document.querySelector(xQuery) as HTMLInputElement | null)?.value) || 0;
    // const y: number = Number((document.querySelector(yQuery) as HTMLInputElement | null)?.value) || 0;
    const x: number = 0;
    const y: number = 0;

    // キャラコマの大きさを取得する
    const width: number = Number((document.querySelector(sizeQuery) as HTMLInputElement | null)?.value) || 0;
    const height: number = width;

    // オプションを取得する
    const secret: boolean = (document.querySelector(secretQuery) as HTMLInputElement | null)?.checked || false; // 「ステータスを非公開にする」かどうか
    const invisible: boolean = (document.querySelector(secretQuery) as HTMLInputElement | null)?.checked || false; // 「発言時キャラクターを表示しない」かどうか
    const hideStatus: boolean = (document.querySelector(secretQuery) as HTMLInputElement | null)?.checked || false; // 「盤面キャラクター一覧に表示しない」かどうか

    // 表情差分を取得する
    const facesOuter: HTMLDivElement | null = document.querySelector(facesQuery);
    const faces: FaceInfo[] = [];
    if(facesOuter){
        // 親要素の子要素を全て取得
        const childElements = facesOuter.children;

        // 最初の2つを無視してループ
        for(let i: number = 2; i < childElements.length; i++){
            const child = childElements[i]; // 表情差分のデータが入った子要素
            const label: string = (child.querySelector("input") as HTMLInputElement | null)?.value || "";
            const iconUrl: string = (child.querySelector("img") as HTMLImageElement | null)?.src || "";
            const newFaceData: FaceInfo = { label, iconUrl };
            faces.push(newFaceData);
        }
    }

    // ステータスを取得する
    const statusOuter: HTMLDivElement | null = document.querySelector(statusQuery);
    const status: StatusInfo[] = [];
    if(statusOuter){
        // 親要素の子要素を全て取得
        const childElements = statusOuter.children;

        // 最初の2つを無視してループ
        for(let i: number = 2; i < childElements.length; i++){
            const child = childElements[i]; // ステータスのデータが入った子要素
            const label: string = (child.querySelector(":scope > div:nth-child(1) input") as HTMLInputElement | null)?.value || "";
            const value: number = Number((child.querySelector(":scope > div:nth-child(2) input") as HTMLInputElement | null)?.value || 0);
            const max: number = Number((child.querySelector(":scope > div:nth-child(3) input") as HTMLInputElement | null)?.value || 0);
            const newStatusData: StatusInfo = { label, value, max };
            status.push(newStatusData);
        }
    }

    // ステータスを取得する
    const paramsOuter: HTMLDivElement | null = document.querySelector(paramsQuery);
    const params: ParamInfo[] = [];
    if(paramsOuter){
        // 親要素の子要素を全て取得
        const childElements = paramsOuter.children;

        // 最初の2つを無視してループ
        for(let i: number = 2; i < childElements.length; i++){
            const child = childElements[i]; // ステータスのデータが入った子要素
            const label: string = (child.querySelector(":scope > div:nth-child(1) input") as HTMLInputElement | null)?.value || "";
            const value: string = (child.querySelector(":scope > div:nth-child(2) input") as HTMLInputElement | null)?.value || "";
            const newParamData: ParamInfo = { label, value };
            params.push(newParamData);
        }
    }

    const result: CharacterInfo = {
        kind: "character",
        data: {
            name, // キャラ名
            initiative, // イニシアチブ
            externalUrl, // 参照URL
            iconUrl, // キャラクターアイコン
            faces, // 表情差分
            commands, // チャットパレット
            status, // ステータス
            params, // パラメータ
            color: "#888888", // キャラのカラー
            memo, // キャラクターメモ
            x, // 盤面上のx座標
            y, // 盤面上のy座標
            angle: 0, // 盤面上の角度
            width, // キャラコマの横幅
            height, // キャラコマの縦幅
            active: true,
            secret, // ステータスを非公開にする
            invisible, // 発言時キャラクターを表示しない
            hideStatus, // 盤面キャラクター一覧に表示しない
            owner: "" // キャラコマの所有者
        }
    }

    return result;
}
