const Content = (props) => {
  return (
    <article>
      <a href={props.content.link}>{props.content.description}</a>
    </article>
  );
};

export default Content;
