import useLocalStorage from './useLocalStorage';

const useToggle = (key, initValue) => {
    const [value, setValue] = useLocalStorage(key, initValue);

    const toggle = (value) => {
        setValue((prev) => {
            return typeof value === 'boolean' ? value : !prev;
            // below code also works fine (didn't understand above code but used in the tutorial)
            // return !prev;
        });
    };

    return [value, toggle];
};

export default useToggle;
