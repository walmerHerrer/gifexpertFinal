import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["GOKU"]);
  const [isInclude, setIsInclude] = useState(false);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      setIsInclude(true);
      return;
    }
    setIsInclude(false);
    setCategories([newCategory.toUpperCase(), ...categories]);
  };

  return (
    <>
      <Navbar className="bg-primary justify-content-center ">
        <AddCategory
          onNewCategory={(value) => onAddCategory(value.toUpperCase())}
        />
        <Button
          variant="danger"
          className="m-2"
          onClick={() => setCategories([...categories.slice(1)])}
        >
          Eliminar actual
        </Button>
        <Button
          variant="danger"
          className="m-2"
          onClick={() => setCategories([])}
        >
          Eliminar todo
        </Button>
      </Navbar>
      {isInclude && (
        <Alert key="warning" variant="warning">
          elemento ya se encuenta
        </Alert>
      )}

      <Accordion defaultActiveKey={0}>
        {categories.length > 0 ? (
          categories.map((element, index) => {
            return (
              <>
                <Accordion.Item key={index} eventKey={index}>
                  <Accordion.Header>
                    <h2>{element}</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <GifGrid key={element} category={element} />
                  </Accordion.Body>
                </Accordion.Item>
              </>
            );
          })
        ) : (
          <Accordion.Item>
            <Accordion.Header>Ningun resultado</Accordion.Header>
          </Accordion.Item>
        )}
      </Accordion>
    </>
  );
};
