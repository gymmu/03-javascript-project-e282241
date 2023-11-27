export function aufgabe01(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++)  {
      const currentElement = input[i]

    //Wenn das aktuelle Zeichen 'e' ist, hänge nichts an die Liste an  
    if (currentElement === "e" ) {
      result.push("")
      //Wenn das aktuelle Zeichen 'E' ist, hänge nichts an die Liste an
    } else if (currentElement === "E" ) {
      result.push("")
    }
    else { //Das aktuelle Zeichen ist weder ein 'e' noch ein 'E', hängt also das aktuelle Zeichen an
      result.push(currentElement)
    }
  }
  
  return result.join("")

}


  export function aufgabe02(args) {
    const input = args
    const result = []
   for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]


     // Wandle das aktuelle Element in einen Grossbuchstaben um
        const capitalizedElement = currentElement.toUpperCase()
     
    //Hänge den Grossbuchstaben an das Resultat an...
        result.push(capitalizedElement)
     
  }
  return result.join("") 
  }
  

  export function aufgabe03(args) {
    const input = args
    const result = []
    let count = 0
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      //Soll nur ein 'e' enthalten
  if (currentElement === 'e'){
    count = count + 1
  }
   
  // Soll grosses 'E' zählen
  else if (currentElement === 'E'){
    count = count + 1
  }
    }
    return count
  
  
  return result.join("") 
  }
  
  

  export function aufgabe04(args) {
    const input = args
    const result = []
   
   
    for (let i = 0; i < input.length; i++) {
       const currentElement = input[i]
       
    }


     
   return result.join("") 
  }
  

  export function aufgabe05(args) {
    const input = args
      const result = []
    let capitalLetters = 0
     
     
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     
    //prüft ob es einen Grossbuchstaben gibt
    if (currentElement=== ".") {}
    else if (currentElement===" "){}
     
    //wenn ein Element gleich ist, dann rechnet es plus 1.
    else if (currentElement === currentElement.toUpperCase())
    {capitalLetters++}
    }
     
    if (capitalLetters > 0) {
      return true
    } else {
       return false
    }
     
    }
    

 


export function aufgabe06(args) {
    const input = args
    

    for (let i = 1; i < input.length; i++) {
     const currentElement = input[i]
     const ascii = currentElement.charCodeAt(0)
     
     if (48<= ascii && ascii <= 57) {
      //mache nichts ist; ist eine Zahl
    
    }else if (65<= ascii && ascii <= 90) {
      //mache nichts; ist A-Z
    
    }else if (97<= ascii && ascii <= 122) {
    //mache nichts; ist a-z

    }else if (currentElement=== " ") {
    
    } else {
      return true
     }
    }
     return false
    }

   


 
  

  export function aufgabe07(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]

     if(currentElement === "u") {
      if (input[i+1]=== "n") {
        if (input[i+2]=== "d") {
          return true
         }
       } 
     }
    }
  return false
}

 

  export function aufgabe08(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]
     if (currentElement === "e" ) {
      result.push("3")
     
    
    }
    else {
      result.push(currentElement)
    }


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe09(args) {
    const input = args
    let len = 0
    for (let i = 0; i < input.length; i++) {
     len++
    }
    if (len === 6) {
      return true
    } else {
      return false
    }

  } 
     
  
  
  

  export function aufgabe10(args) {
    const input = args

    if (input.length !== 7) return false
    if (input[0] !== "#") return false

    for (let i = 1; i < input.length; i++) {
     const currentElement = input[i]
     const ascii = currentElement.charCodeAt(0)
     if (48 <= ascii && ascii <= 57) {
      //mache nichts ist; ist eine Zahl
     }else if (65 <= ascii && ascii <= 70) {
      //mache nichts; ist A-F
     }else {
      return false
     }
    }
     return true
    }
  

  export function aufgabe11(args) {
    const input = args
    let ascii = 0

    if (input.length > 1) {
      return null
    }

   for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]
     ascii = currentElement.charCodeAt(0)
     return ascii  
     
  }
  return null
  }
  
  export function aufgabe12(args) {
    const input = args

    for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]
     if (currentElement === 'e' ) {
      return i
     }
     
  }
  return -1
  }
  

  export function aufgabe13(args) {
    const input = args
    const result = []
    
    let positionOfLastE = -1
    
    for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]
     if (currentElement === "e") {
      positionOfLastE = i
     }

 }
  return positionOfLastE
  }
  

  export function aufgabe14(args) {
    const input = args
    let countE = 0

    for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]
     if (currentElement === 'e' ) {
      countE = countE + 1
      if (countE === 3) {
        return i 
      }
    }
  }
  return -1
  }
  

  export function aufgabe15(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]
     
     //erkennt ein Leerzeichen und bricht danach ab
     if (currentElement=== ' ') {
      return result.join("")
     }

     //wenn kein Leerzeichen erkannt wird, dann normal weiter
     result.push(currentElement)

 }
  return result.join("") 
  }
  

 
  
  

    
  export function aufgabe18(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe19(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe20(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe21(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe22(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe23(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  
  export function aufgabe24(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe25(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe26(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  

  export function aufgabe27(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  return result.join("") 
  }
  
  export function aufgabe28(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.lenght; i++) {
     const currentElement = input[i]


     
     
  }
  }
