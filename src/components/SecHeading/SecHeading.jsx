
const SecHeading = ({subHeading, heading, paraHeading, headingWidth, paraClass , className}) => {
  return (
   <div className={className}>
     <p className="font-inter text-sub3 text-primary mb-20">{subHeading}</p>
     <div className={`${headingWidth} font-inter text-h2 text-dark1`}>{heading}</div>
     <p className={`font-inter text-p1 text-dark3 mt-20 capitalize ${paraClass}`}>{paraHeading}</p>
   </div>
  )
}

export default SecHeading