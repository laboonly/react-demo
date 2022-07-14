import React, { FC, useState } from "react";
import './index.scss'

class Math {
  @log
  async add(a: any) {

    if(a >= 3 ) {
      throw new Error('xxxx');
    }

    return a + 1;
  }
}

function log(target: any, name: any, descriptor: any) {
  console.log(target)
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}



const Demo : FC = () => {
  const [count, setCount] = useState(0);
  const math = new Math();

  const handleClick = async () => {
    setCount( await math.add(count));
  };

  const handleClick2 = () => {
    setCount(count + 1);
  }

  return (
      <div>
          <p>{count}</p>
          <button onClick={() => handleClick2()} className="button">
              setCount
          </button>
          <button onClick={() => handleClick()} className="button">
              setCount
          </button>
      </div>
  );
}

export default Demo;