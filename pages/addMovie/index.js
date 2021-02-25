import React from "react";

import PieceForm from "../../components/PieceForm/PieceForm";

const addMovie = () => {
  return (
    <>
      <section>
        <form>
          <div>
            <div>
              <PieceForm type="text" title="title" />
              <PieceForm type="url" title="cover" />
            </div>
            <div>
              <PieceForm type="number" title="year" />
              <PieceForm type="number" title="duration" />
            </div>
          <div>
              <p>description</p>
              <textarea />
          </div>
            
          </div>
          <button>Send</button>
        </form>
      </section>
    </>
  );
};

export default addMovie;
