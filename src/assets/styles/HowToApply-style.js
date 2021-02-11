import {createUseStyles} from "react-jss";
import colors from "../../utils/variables"

const useStyles = createUseStyles({
    box: {
        width: "50%",
        margin: "2rem auto 3.5rem auto", 
        backgroundColor: colors.primary.violet,
        color: colors.secondary.white,
        borderRadius: "0.4rem",
        padding: "2rem 3rem 2rem 3rem",
        "& p": {
            lineHeight: "1.625rem",

        }
    },
    
})

export default useStyles; 