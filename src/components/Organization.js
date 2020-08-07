function Organization(props) {
  return (
    <div class="card border-primary mb-3">
      <div class="card-body">
        <p class="card-text">{props.org.name}</p>
      </div>
    </div>
  );
}

export default Organization;
