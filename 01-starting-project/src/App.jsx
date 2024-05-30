import { Tab } from "semantic-ui-react";
import { CORE_CONCEPTS } from "./data";
import { useState, useEffect } from "react";
import Header from "./Components/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import TabButton from "./Components/TabButton.jsx";

function App() {
  const [content, setContent] = useState();

  const descriptions = {
    Jitt: "j",
    "Fu Qiang": "fq",
    Dwight: "d",
    Keegan: "k",
    Kelvin: "kel",
  };

  const clickHandler = (name) => {
    setContent(descriptions[name]);
    // console.log(content);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
            can use the map function below to shorten repititive code 
            */}
            {CORE_CONCEPTS.map((coreConcept) => (
              /* <CoreConcepts title={coreConcept.title}
              description={coreConcept.description}
              image={coreConcept.image}
              can use the spread function below to shorten this further
              */
              <CoreConcepts {...coreConcept} />
            ))}
          </ul>
          <h2>Time to get started!</h2>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              active={content === "j"}
              onSelect={() => clickHandler("Jitt")}
            >
              Jitt
            </TabButton>
            <TabButton
              active={content === "fq"}
              onSelect={() => clickHandler("Fu Qiang")}
            >
              Fu Qiang
            </TabButton>
            <TabButton
              active={content === "d"}
              onSelect={() => clickHandler("Dwight")}
            >
              Dwight
            </TabButton>
            <TabButton
              active={content === "k"}
              onSelect={() => clickHandler("Keegan")}
            >
              Keegan
            </TabButton>
            <TabButton
              active={content === "kel"}
              onSelect={() => clickHandler("Kelvin")}
            >
              Kelvin
            </TabButton>
          </menu>
          {!content ? "Please select a member" : <p>{content}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
