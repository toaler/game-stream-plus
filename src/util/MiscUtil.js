class MiscUtil {

    static nvl(value, defaultV) {
        return value !== undefined ? value : defaultV;
    }
}

export default MiscUtil;