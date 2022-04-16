import React from "react"

const Video = React.forwardRef(({ src }, ref) => {
    return <video height={200}
        src={src}
        ref={ref}
    ></video >
})

export default Video