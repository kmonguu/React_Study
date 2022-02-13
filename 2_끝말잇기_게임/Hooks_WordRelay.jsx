const React = require('react');
const { useState, useRef } = React

const WordRelay = () => {
    const [word, setWord] = useState('끝말잇기 시작');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useReft(null);
};

const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
        setResult ('정답');
        setWord (value);
        setValue ('');
        inputRef.current.focus();
    } else {
        setResult ('다시 입력하세요');
        setValue ('');
        inputRef.current.focus();
    }
};

const onChangeInput = (e) => {
    setValue(e.target.value);
};

return (
    <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
            <input ref={onRefInput} value={value} onChange={onChangeInput} />
            <button>결과</button>
        </form>
        <div>{result}</div>
    </>
);

module.exports = WordRelay;