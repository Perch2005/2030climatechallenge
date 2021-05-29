const compose = (...func) => (comp) =>{
  return func.reduceRight((wrraped,f) => f(wrraped),comp)
}

export default compose