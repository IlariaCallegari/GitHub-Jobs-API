import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    list: {
        marginBottom: "3rem",
        display: "grid",
        gridTemplateColumns: "repeat(3, 31%)",
        gridTemplateRows: "repeat(auto-fill, 14rem)",
        columnGap: "2.5rem",
        rowGap: "4rem",
        justifyItems: "stretch",
    }
})

export default useStyles; 