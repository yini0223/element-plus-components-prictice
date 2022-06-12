import {ElMessage} from "element-plus"
// 复制
export const useCopy = (txt: string) => {
    // 通过利用input实现复制
    // 创建input
    let input = document.createElement('input');

    // 给input.value赋值
    input.setAttribute('value', txt);

    // 向body追加input元素
    document.body.appendChild(input);  

    // 选择输入框
    input.select()

    // console.log(input.value)

    // 复制
    if (document.execCommand('copy')) {
        document.execCommand("copy"); // 执行浏览器复制命令

        // 提示用户复制成功
        ElMessage.success('复制成功')
    }    
    
    // 移除追加的input
    document.body.removeChild(input);
}
