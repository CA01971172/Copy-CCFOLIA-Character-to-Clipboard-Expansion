import React from 'react';
import ReactDOM from 'react-dom';
import { menuButtonQuery, portalQuery } from '../utils/documentQueries';
import Providers from './providers/Providers';
import App from './App';

async function addCharacteristicTableButton(data: CharacteristicTableData[]): Promise<void>{ // 特徴表ボタンを追加する関数
    // ボタンを追加するための要素を取得する
    let targetElement: HTMLElement|null = await challengeQuery(menuButtonQuery);
    if (!targetElement){
         // 一定時間待機してもターゲットとなる要素が見つからなければ処理を止める
        throw new Error("特徴表ボタンを追加できませんでした")
    }

    // コンテナを追加する
    const container: HTMLElement = document.createElement("div");
    container.style.position = "relative";
    container.style.right = "8rem";
    targetElement.style.position = "absolute";
    targetElement.after(container);

    // ドロップダウンメニューが開かれたときのbodyのoverflowを無効化する
    // スタイルシートに新しいルールを追加する
    const styleElement: HTMLStyleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    const styleSheet: CSSStyleSheet = styleElement.sheet as CSSStyleSheet;
    styleSheet.insertRule(
        `body {
            padding: 0 !important;
            overflow: visible !important;
        }`,
        styleSheet?.cssRules.length
    );
    styleSheet.insertRule(
        `.white-color textarea {
            color: white !important;
        }`,
        styleSheet?.cssRules.length
    );

    ReactDOM.render(
        <React.StrictMode>
            <Providers characteristicTableData={data}>
                <App/>
            </Providers>
        </React.StrictMode>,
        container
    );
}

async function challengeQuery(query: string): Promise<HTMLElement | null>{ // 指定された要素が見つかるまで画面更新を待機する関数
    let targetElement: HTMLElement | null = null;

    // 監視するDOMノードを取得
    const targetNode: HTMLElement = document.body;

    return new Promise((resolve, _reject) => {
        // MutationObserverオブジェクトを作成
        const observer: MutationObserver = new MutationObserver((_mutationsList, _observer) => {
            // 変更が検出された際に実行されるコールバック関数
            targetElement = document.querySelector(query);
            if(targetElement !== null){
                // console.log(`目標の要素を発見しました\ndocument.querySelector("${query}")`,targetElement);
                observer.disconnect(); // DOMの監視を終了する
                resolve(targetElement); // 結果を返してPromiseを解決する
            }
        });

        // 監視オプションを設定
        const config = {
            childList: true, // 子ノードの変化を監視
            subtree: true // 子孫ノードも監視対象に含める
        };

        // 監視を開始
        observer.observe(targetNode, config);
    });
}


// 拡張機能を実行する関数
async function main(data: CharacteristicTableData[]){
    console.log("いあきゃら特徴表")
    await addPortalRoot();
    await addCharacteristicTableButton(data);
}