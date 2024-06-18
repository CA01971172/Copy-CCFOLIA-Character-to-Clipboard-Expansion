// キャラコマのデータ
export type CharacterInfo = {
    kind: string; // コマの種類？
    data: CharacterDataInfo; // キャラクターデータ
};

// キャラクターデータ
export type CharacterDataInfo = {
    name: string; // キャラ名
    initiative: number; // イニシアチブ
    externalUrl: string; // 参照URL
    iconUrl: string; // キャラクターアイコン
    faces: FaceInfo[]; // 表情差分
    commands: string; // チャットパレット
    status: StatusInfo[]; // ステータス
    params: ParamInfo[]; // パラメータ
    color: string; // キャラのカラー
    memo: string; // キャラクターメモ
    x: number; // 盤面上のx座標
    y: number; // 盤面上のy座標
    angle: number; // 盤面上の角度
    width: number; // キャラコマの横幅
    height: number; // キャラコマの縦幅

    // ここからはあまり変更しないデータ
    active: boolean;
    secret: boolean; // ステータスを非公開にする
    invisible: boolean; // 発言時キャラクターを表示しない
    hideStatus: boolean; // 盤面キャラクター一覧に表示しない
    owner: string; // キャラコマの所有者
};

// 表情差分データ
export type FaceInfo = {
    label: string; // 表情差分名
    iconUrl: string; // 表情差分アイコンのURL
};

// ステータスデータ
export type StatusInfo = {
    label: string; // ステータス名
    value: number; // ステータスの現在値
    max: number; // ステータスの最大値
};

// パラメータデータ
export type ParamInfo = {
    label: string; // パラメータ名
    value: string; // パラメータの値
};
