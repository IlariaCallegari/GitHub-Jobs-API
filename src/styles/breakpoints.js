// eslint-disable-next-line import/no-anonymous-default-export
export default {
    up(){

    },
    down(size){
        const sizes = {
            xs: "375px",
            sm: "768px",
            md: "1024px",
            lg: "1271px",
            xl: "1351px",
        }
        return `@media(max-width: ${sizes[size]})`;
    }
}