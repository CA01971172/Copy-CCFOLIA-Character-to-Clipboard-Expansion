import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { getCharacterData } from '../utils/getCharacterData';
import { exportToClipboard } from '../utils/modules';

const theme = createTheme({
    palette: {
        primary: {
            main: "#fff" // プライマリーカラーを白色に設定
        }
    }
});

// キャラクター編集メニューの入力内容をjson形式に変換したものを取得するボタン
export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Button
                onClick={() => {
                    // キャラクターデータを取得し、クリップボードにコピーする
                    const characterData = getCharacterData();
                    const characterDataStr: string = JSON.stringify(characterData);
                    exportToClipboard(characterDataStr);
                    window.alert("キャラクターコマをコピーしました。");
                }}
            >
                キャラコマ出力
            </Button>
        </ThemeProvider>
    );
}
