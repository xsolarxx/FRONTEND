import './FlexCenter.css';

export const FlexCenter = (props) => {
  console.log('Props', props);
  return (
    <div className="flexCenter" id={props.class}>
      {props.children}
    </div>
  );
};
