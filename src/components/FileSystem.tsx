import { useState } from "react";
import { AddFolderIcon } from "../assets/Icons";

interface FileStructure {
  id: number;
  name: string;
  type: "folder" | "file";
  children?: FileStructure[];
}

const fileStructure: FileStructure[] = [
  {
    id: 1,
    name: "folder1",
    type: "folder",
    children: [{ id: 2, name: "file1", type: "file" }],
  },
  {
    id: 3,
    name: "folder2",
    type: "folder",
    children: [
      {
        id: 4,
        name: "folder3",
        type: "folder",
        children: [{ id: 5, name: "file2", type: "file" }],
      },
    ],
  },
  { id: 6, name: "file3", type: "file" },
  {
    id: 7,
    name: "folder4",
    type: "folder",
    children: [
      {
        id: 8,
        name: "folder5",
        type: "folder",
        children: [{ id: 9, name: "file4", type: "file" }],
      },
    ],
  },
  { id: 10, name: "file5", type: "file" },
  { id: 11, name: "folder6", type: "folder", children: [] },
];

export default function FileSystem() {
  const [isFolderExpanded, setIsFolderExpanded] = useState<{
    [key: string]: boolean;
  }>({});
  const [data, setData] = useState<FileStructure[]>(fileStructure);

  const renderExpandCollapseIcon = (fileStruct: FileStructure) => {
    if (fileStruct.type === "folder" && fileStruct.children?.length) {
      if (isFolderExpanded[fileStruct.name]) {
        return "-";
      } else {
        return "+";
      }
    } else {
      return "";
    }
  };

  const addFolder = (parentId: number) => {
    const newFolderName = prompt("Enter folder name:");
    if (!newFolderName) return;

    const updateFolderStructure = (
      folderData: FileStructure[]
    ): FileStructure[] => {
      return folderData.map((item) => {
        if (item.id === parentId) {
          return {
            ...item,
            children: [
              ...(item.children as FileStructure[]),
              {
                id: Date.now(),
                name: newFolderName,
                type: "folder",
                children: [],
              },
            ],
          };
        }
        if (item.children?.length) {
          return {
            ...item,
            children: updateFolderStructure(item.children),
          };
        }
        return item;
      });
    };
    setData((prevData) => updateFolderStructure(prevData));
  };

  const renderAddFolder = (id: number) => {
    return (
      <button className="cursor-pointer" onClick={() => addFolder(id)}>
        <AddFolderIcon />
      </button>
    );
  };

  const renderFolderStructure = (children: FileStructure[]) => {
    return (
      <>
        {children.map((item) => {
          return (
            <ul key={item.id} className="ml-4">
              <li className="ml-8 flex gap-2">
                <button
                  className="cursor-pointer mr-1"
                  onClick={() =>
                    setIsFolderExpanded((prevState) => ({
                      ...prevState,
                      [item.name]: !prevState[item.name],
                    }))
                  }
                >
                  {renderExpandCollapseIcon(item)}
                </button>
                {item.name}
                <span>
                  {item.type === "folder" && renderAddFolder(item.id)}
                </span>
              </li>

              {isFolderExpanded[item.name] &&
                item.children?.length &&
                renderFolderStructure(item.children)}
            </ul>
          );
        })}
      </>
    );
  };

  return (
    <>
      <h2 className="mt-10 mb-5 flex justify-center items-center text-xl font-bold">
        File System
      </h2>
      <div className="mb-5 px-3 flex justify-center items-center text-md font-normal">
        You can expand or collapse folders by clicking on the + icons placed
        before each folder name. You can add a new folder by clicking on the
        folder icon next to the folder name. Currenly, you can only add folders,
        not files.
      </div>
      {renderFolderStructure(data)}
    </>
  );
}
