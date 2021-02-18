// eslint-disable-next-line import/no-anonymous-default-export
export default {
    up(){

    },
    down(size){
        const sizes = {
            xs: "550px",
            sm2: "800px",
            sm: "900px",
            md: "1024px",
            lg: "1271px",
            xl: "1351px",
        }
        return `@media(max-width: ${sizes[size]})`;
    }
}