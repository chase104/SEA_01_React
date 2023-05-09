const Dogs = () => {
    // an array of dogs
    const dogs = [
      { name: "Sparky", age: 5 },
      { name: "Spot", age: 5 },
      { name: "Ralph", age: 5 },
      { name: "Fido", age: 5 },
    ]
    // map over the dogs array and create an array of JSX for each dog
    const dogJSX = dogs.map(dog => {
      // we return JSX for each dog in the array which we store in the dog variable, essentially we are looping over dog of dogs
      return (
        <div>
          <h1>{dog.name}</h1>
          <h2>{dog.age}</h2>
        </div>
      )
    })

    // [
    //     <div>
    //       <h1>{"Sparky"}</h1>
    //       <h2>{5}</h2>
    //     </div>,
    //     <div>
    //         <h1>{"Spot"}</h1>
    //         <h2>{5}</h2>
    //     </div>,
    //     <div>
    //         <h1>{"Ralph"}</h1>
    //         <h2>{5}</h2>
    //      </div>,
    //      <div>
    //         <h1>{"fido"}</h1>
    //         <h2>{5}</h2>
    //    </div>
    // ]
  
    // the component returns JSX that uses the dogJSX array
    return <div>{dogJSX}</div>
  }

  export default Dogs