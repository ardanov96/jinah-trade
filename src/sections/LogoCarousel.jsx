import { motion as Motionx } from "framer-motion"



const LogoCarousel = () => {
    const logos = [
        "/log1.jpeg",
        "/log2.jpeg",
        "/log3.png",
        "/log4.png",
        "/log5.png",   
    ];

    const extendedLogos = [...logos, ...logos, ...logos]
  
    return (    
    <div className="w-full overflow-hidden cursor-pointer bg-[#050505]
    backdrop-blur-sm py-12 mt-20">
        
        <Motionx.div 
            className="flex space-x-16" 
            style={{
                width:"fit-content",
                display: "flex",
                gap: "4rem",
            }}
            initial={{
                opacity: 0, 
                x:"0%",
            }} 
            animate={{
                opacity: 1,
                x:"-50%",
            }}
            transition={{
                opacity: {duration: 0.5},
                    x: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                },
            }}
        >
            {extendedLogos.map((item, index) => (
                <Motionx.img 
                    key={index} 
                    src={item} 
                    alt="logo"
                    className="h-8 object-contain"
                    initial={{

                        opacity: 0.5

                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.05,
                        transition: {duration:0.2},
                    }} 
                />
            ))} 
        </Motionx.div>
    </div>
  );
};

export default LogoCarousel