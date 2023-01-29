export const Card = ({ elem }) => {
    
    return (
    <div className="col-md-6 col-sm-12 card-col col-xl-4" >
        <div className="card" >
            <img className="card-img-top" src={ elem.sprites.back_default }  alt={ elem.name } />
            <h2>  { elem.name } - { elem.id }  </h2>
            <p> weight: { elem.weight } </p>
            <p>  species: { elem.species.name } </p>
        </div>
    </div>);

};