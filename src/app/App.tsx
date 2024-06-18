import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
        primary: {
            main: "#fff" // プライマリーカラーを白色に設定
        }
    }
});

// キャラクター編集メニューの入力内容をjson形式に変換したものを取得するボタン
export default function ConvertButton() {
    return (
        <ThemeProvider theme={theme}>
            <Button
                onClick={() => {
                    window.alert("キャラクターコマをコピーしました。");
                }}
            >
                キャラコマ出力
            </Button>
        </ThemeProvider>
    );
}
