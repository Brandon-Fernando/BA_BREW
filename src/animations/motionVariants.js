// HOME PAGE 
export const lineSlide = {
  hidden: {
    opacity: 0, 
    x: 40
  }, 
  visible: {
    opacity: 1, 
    x: 0, 
    transition: {
      duration: 0.4, 
      ease: "easeInOut", 
    }
  }
}

export const titleSlide = {
  hidden: {
    opacity: 0, 
    x: -40
  }, 
  visible: {
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4, 
      ease: "easeInOut"
    }
  }
}

export const staggerContainer = {
  hidden: {
    opacity: 0
  }, 

  visible: {
    opacity: 1, 
    transition: {
      delayChildren: 0.07, 
      staggerChildren: 0.2
    }
  }
}

export const staggerChildren = {
  hidden: { 
    opacity: 0, 
    y: 10, 
    scale: 0.97
  }, 

  visible: {
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: {
      duration: 0.4, 
      ease: "easeInOut"
    }
  }
}

// BACKDROP 
export const backdropFade = {
  hidden: {opacity: 0}, 
  visible: {opacity: 1, transition: {duration: 0.3}},
  exit: { opacity: 0, transition: {duration: 0.3}}
}

export const sidebarSlide = {
  hidden: {x: 400},
  visible: {x: 0, transition: { duration: 0.4, delayChildren: 0.08, staggerChildren: 0.09, }}, 
  exit: {x: 400, transition: { duration: 0.4 }}
}

// HEADER 
export const headerSlide = {
  hidden: {
    opacity: 0, 
    x: 10
  }, 
  visible: {
    opacity: 1, 
    x: 0, 
    transition: {
      duration: 0.4, 

    }
  }
}

// MENU 
export const wrapperSlide = {
  hidden: {
    // y: -10, 
    opacity: 0
  }, 
  visible: {
    // y: 0, 
    opacity: 1, 
    transition: {
      duration: 0.3, 
      ease: "easeInOut", 
      delayChildren: 0.02
    }
  }
}

export const slideInFromRight = {
  hidden: {
    x: 20, 
    opacity: 0
  }, 
  visible: {
    x: 0, 
    opacity: 1, 
    transition: {
      duration: 0.5, 
      ease: "easeInOut", 
      // delay: 0.4
    }
  }
}

export const slideInFromLeft = {
  hidden: {
    x: -20, 
    opacity: 0
  }, 
  visible: {
    x: 0, 
    opacity: 1, 
    transition: {
      duration: 0.5, 
      ease: "easeInOut", 
      // delay: 0.4
    }
  }
}

// DRINK ANIMATIONS 
export const drinkBgSlide = {
  hidden: {
    x: 200, 
    opacity: 0
  }, 
  visible: {
    x: 0, 
    opacity: 1, 
    transition: {
      duration: 0.5, 
      ease: "easeInOut"
    }
  }
}

export const drinkSlide = {
  hidden: {
    x: -100, 
  }, 
  visible: {
    x: 0, 
    transition: {
      duration: 0.5, 
      ease: "easeInOut"
    }
  }
}

// EXPANDED ANIMATION 
export const expandAnimation = {
  hidden: {
    height: 0, 
    opacity: 0
  }, 
  visible: {
    height: "auto", 
    opacity: 1, 
    transition: {
      height: {
        duration: 0.3, ease: "easeInOut"
      }, 
      opacity: {
        duration: 0.2
      }
    }
  }, 
  exit: {
    height: 0, 
    opacity: 0
  }
}


// CUSTOMIZE OPTIONS 
export const customizeOptions = {
  inactive: {
    backgroundColor: "#D7978C", 

  }, 
  active: {
    backgroundColor: "#CA5050", 
    transition: {
      duration: 0.3, 
      ease: "easeInOut"
    }
  }
}

export const popupScale = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    },
  }, 
  exit: {
    opacity: 0, 
    scale: 0.5, 
    transition: {
      duration: 0.4
    }
  }
};

// SPRING BUTTON  
export const buttonScale = {
  inactive: {
    scale: 1, 
  }, 
  active: {
    scale: 0.5, 
    transition: {
      duration: 0.5, 
      type: "spring", 
      stiffness: 180, 
      damping: 14
    }
  }
}

// SLIDE UP BUTTON 
export const slideUpButton = {
  hidden: {
    y: 15,
  }, 
  visible: {
    y: 0, 
    transition: {
      duration: 0.4, 
      ease: "easeInOut"
    }
  }, 
  exit: {
    y: 20
  }
}