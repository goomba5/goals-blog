import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridItems from "../components/gridItem"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}))

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridItems />
        </div>
    )

}