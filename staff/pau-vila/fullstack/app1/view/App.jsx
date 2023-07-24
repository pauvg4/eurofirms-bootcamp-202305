function App() {
  console.log('App -> render')

  const viewState = React.useState(context.token ? 'home' : 'login')
  const view = viewState[0]
  const setView = viewState[1]

  const handleRegisterClick = () => setView('register')

  const handleLoginClick = () => setView('login')

  const handleLoggedIn = () => setView('home')

  const handleRegistered = () => setView('login')

  const handleLoggedOut = () => setView('login')

  if (view === 'login')
    return <Login onRegisterClick={handleRegisterClick} onLoggedIn={handleLoggedIn} />
  else if (view === 'register')
    return <Register onLoginClick={handleLoginClick} onRegistered={handleRegistered} />
  else if (view === 'home')
    return <Home onLoggedOut={handleLoggedOut} />
}

//viewStates: gestiona datos cambiates dentro del componente view
//handle: controlador de eventos o función 
//onLoggedOut:función que cuando un usuario cierra la sesión en una aplicación web, 
//también se utiliza para realizar tareas como limpiar datos de sesión, redirigir al usuario y actualizar la interfaz de usuario.