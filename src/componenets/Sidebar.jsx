import { GoHome } from "react-icons/go";

const Sidebar = () => {
  const sideitem = [
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
   
  ];
  const sideitem2 = [
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    }, {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    }, {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    }, {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
    {
      id: "1",
      name: "home",
      icon: <GoHome />,
    },
   
  ];
  return (
   
      <div className="px-6 w-[15%]  h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <div className="space-y-3 items-center">
          {sideitem.map((item) => {
            return (
              <div key={item.id} className="flex items-center space-x-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div className="space-y-3 items-center">
          {sideitem2.map((item) => {
            return (
              <div key={item.id} className="flex items-center space-x-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      
       
        
   
  );
};

export default Sidebar;
