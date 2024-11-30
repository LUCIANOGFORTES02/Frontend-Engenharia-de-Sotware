import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EditProfile() {

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    userName: "",
    description:"",
    email: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    confirmNewPassword: "",
  });

  // Função para atualizar os detalhes
  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  // Função para atualizar a senha
  const handlePasswordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  // Função para salvar as alterações
  const handleSaveDetails = () => {
    try{

    } catch(error){

    }
  };

  // Função para salvar a senha
  const handleSavePassword = () => {
    const {currentPassword,newPassword,confirmPassword,confirmNewPassword} = passwords
    console.log("Current",currentPassword)
    console.log("New",newPassword)
    console.log("Confirm",confirmPassword)
    console.log("ConfirmNew",confirmNewPassword)

    if (!currentPassword || newPassword !== confirmNewPassword || 
      currentPassword!== confirmPassword
      ) {
      toast.error('Preencha os campos corretamente.',{
        position: "top-right",
        theme: "dark",
    })
      return;
    }  
      toast.success('Senha alterada')

    console.log("Password changed:", passwords);
  };



  return (
    <div className="flex flex-1 flex-col p-4 h-screen" >
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 items-start ">
        {/* Card do Usuário */}
        <div className="col-span-1 flex flex-col items-center p-6 rounded-lg shadow-lg"  
          style={{ backgroundColor: '#21222D' }}
          >
          <Avatar className="border-4 border-accent shadow-lg w-32 h-32" >
            <AvatarImage 
              src="https://github.com/shadcn.png"
              />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-1 flex-col items-center '>
          <h3 className="text-xl font-semibold mt-2">@User-Name{userDetails.firstName}</h3>
          <p className="text-sm text-foreground mt-1 text-justify ">
            <span >
              Fotógrafo amador e amante da tecnologia.{userDetails.description}
            </span>
          </p>
          </div>
          <button className="mt-4 px-4 py-2 bg-primary text-foreground rounded-md hover:bg-green-600">
            Editar
          </button>
        </div>

        {/* Formulário de Edição */}
        <div className="col-span-2 p-6 rounded-lg shadow-lg" 
          style={{ backgroundColor: '#21222D' }}>
          <h1 className="text-2xl font-bold mb-6">Configurações do usuário</h1>

          {/* Detalhes do Usuário */}
          <section className="mb-6">
            <h4 className="text-lg font-medium mb-2">Detalhes</h4>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome completo"
                name='firstName'
                value={userDetails.firstName}
                onChange={handleDetailsChange}
                className="w-full p-2 rounded-md bg-gray-700 text-foreground focus:outline-none"
              />
              <input
                type="text"
                placeholder="Nome de usuário"
                name='userName'
                value={userDetails.userName}
                onChange={handleDetailsChange}
                className="w-full p-2 rounded-md bg-gray-700 text-foreground focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                name='email'
                value={userDetails.email}
                onChange={handleDetailsChange}
                className="md:col-span-2 w-full p-2 rounded-md bg-gray-700 text-foreground focus:outline-none"
              />
            
              <div className="col-span-full">
                <button
                  type="button"
                  onClick={handleSaveDetails}
                  className="px-4 py-2 bg-primary text-foreground rounded-md hover:bg-green-600"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </section>

          {/* Alteração de Senha */}
          <section>
            <h4 className="text-lg font-medium mb-2">Alteração de Senha</h4>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="password"
                placeholder="Senha atual"
                name='currentPassword'
                value={passwords.currentPassword}
                onChange={handlePasswordsChange}
                className="w-full p-2 rounded-md bg-gray-700 text-foreground focus:outline-none"
                
              />
              <input
                type="password"
                placeholder="Confirmar senha"
                name='confirmPassword'
                value={passwords.confirmPassword}
                onChange={handlePasswordsChange}
                className="w-full p-2 rounded-md bg-gray-700 text-foreground  focus:outline-none"
                
              />
              <input
                type="password"
                placeholder="Senha nova"
                name='newPassword'
                value={passwords.newPassword}
                onChange={handlePasswordsChange}
                className="w-full p-2 rounded-md bg-gray-700 text-foreground  focus:outline-none"
                
              />
              <input
                type="password"
                placeholder="Confirmar senha nova"
                name='confirmNewPassword'
                value={passwords.confirmNewPassword}
                onChange={handlePasswordsChange}
                className="w-full p-2 rounded-md bg-gray-700 text-foreground  focus:outline-none"
                

              />
              <div className="col-span-full">
                <button
                  type="button"
                  onClick={handleSavePassword}
                  className="px-4 py-2 bg-primary text-foreground  rounded-md hover:bg-green-600"
                >
                  
                  Alterar Senha
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <ToastContainer />
    </div>
  
  )
}
