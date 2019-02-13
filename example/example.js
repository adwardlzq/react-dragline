const initialChildren = [
  { id: 1, background: '#8ce8df', size: 100, position: {x: 100, y: 0} },
  { id: 2, background: '#8ce8df', size: 100, position: {x: 200, y: 106} },
  { id: 3, background: '#afc7fd', size: 102, position: {x: 500, y: 106} },
  { id: 4, background: '#d2aff6', size: 150, position: {x: 100, y: 316} },
  { id: 5, background: '#fee493', size: 200, position: {x: 480, y: 376} },
]

function Example() {
  const containerStyle = {
    position: 'relative',
    height: 600,
    boxShadow: '0 0 5px 1px #CCC inset',
    background: '#F5F8FA',
    color: '#4A4A4A',
    margin: 20,
  }

  const childStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'move',
  }

  return (
    <div>
      <style>{'.active { opacity: .5; }'}</style>
      <DraggableContainer style={containerStyle}>
        {
          initialChildren.map(({ id, background, size, position }) => (
            <DraggableChild
              key={id}
              defaultPosition={position}
            >
              <div
                className="item"
                style={{
                  ...childStyle,
                  background,
                  width: size,
                  height: size,
                }}
              >
                <span>size: {size}</span>
                <span>drag me</span>
              </div>
            </DraggableChild>
          ))
        }
      </DraggableContainer>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
