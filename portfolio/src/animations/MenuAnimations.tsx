export const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
        duration: 3,
        ease: "easeInOut"
        }
    }
}

export const flicker = {
    opacity: [1, 0.8, 1, 0.9, 1],
    scale: 1.1,
    transition: {
        opacity: {
            duration: 0.45,
            repeat: Infinity,
            repeatType: 'mirror',
        }
    }
}


export const draw_whatsapp = {
    
    hidden: {
      strokeDasharray: "340, 35",
      strokeDashoffset: 340,
    },
    visible: {
      strokeDasharray: "340, 35",
      strokeDashoffset: 150,      
      opacity: 1,
      transition: { duration: 3, ease: "easeInOut" }
    }
  };


  export const draw_github = {
    
    hidden: {
      strokeDasharray: "450 65",
      strokeDashoffset: 330,
    },
    visible: {
      strokeDasharray: "450 65",
      strokeDashoffset: 330,      
      opacity: 1,
      transition: { duration: 3, ease: "easeInOut" }
    }
  };