import React from "react";

type Props = {
    list: Array<string>
}

const CommaSeparatedList: React.FC<Props> = ({list}) => {
    return (
        <>
            {list.map((item, idx) => <React.Fragment key={idx}>
                <span>{item}</span>{idx !== list.length - 1 ? `, ` : ""}
            </React.Fragment>)}
        </>
    );
};


export default CommaSeparatedList
