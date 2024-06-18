import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './providers/Providers';
import App from './App';
import { editHeaderQuery } from './../utils/documentQueries';

async function addC4ExpansionButton(){ // キャラクター編集メニューに「キャラコマ出力」ボタンを追加する関数
    // キャラクター編集メニューの要素が追加されるのを監視し、要素に「キャラコマ出力」ボタンが追加されていなければ追加する

    // 監視するDOMノードを取得
    const targetNode:HTMLElement = document.body;

    // Reactコンポーネントを入れる用のDOM要素でできた外枠
    const container: HTMLElement = document.createElement("div");

    // MutationObserverオブジェクトを作成
    const observer: MutationObserver = new MutationObserver(function(mutationsList, _observer){
        // 変更が検出された際に実行されるコールバック関数
        for(const mutation of mutationsList) {
            if ((mutation.type === 'childList') && (mutation.addedNodes.length > 0)) {
                // キャラクター編集メニューの「キャラクター編集」見出し要素を取得する
                const characterEditTitle = document.querySelector(editHeaderQuery)
                if(characterEditTitle?.textContent === "キャラクター編集"){
                    // 「キャラクター編集」見出しの後ろに「キャラコマ出力」ボタンを追加する
                    characterEditTitle.after(container)
                    ReactDOM.render(
                        <React.StrictMode>
                            <Providers>
                                <App/>
                            </Providers>
                        </React.StrictMode>,
                        container
                    );
                    console.log("キャラクター編集メニューに「キャラコマ出力」ボタンを追加しました。");
                    return;
                }
            }
        }
    });

    // 監視オプションを設定
    const config = { childList: true, subtree: false };

    // 監視を開始
    observer.observe(targetNode, config);
}


// 拡張機能を実行する関数
async function main(){
    await addC4ExpansionButton();
}


// 拡張機能を実行する
main();
