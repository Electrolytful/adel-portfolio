import { createContext, useState, useContext } from "react";

const WorkContext = createContext({
  works: [],
});

export function WorkContextProvider({ children }) {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "The Silence is Mine",
      author: "Adel Bedoud",
      description:
        "Creative Writing Short Story (3,000 words) - This self-contained short story delves into the emotional journey of a man as he grapples with the aftermath of a break-up. The piece intricately explores themes of depression, ambiguity, and the subjective nature of how reality can be perceived.",
      image:
        "https://www.pacificflying.com/wp-content/uploads/Magda-Ehlers-clouds.jpg",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1716491/b7864bbac008fa22e8537217c06d9d8a.pdf?",
      type: "fiction",
    },
    {
      id: 2,
      title: "The Runner",
      author: "Adel Bedoud",
      description:
        "Creative Writing Short Story (3,000 words) - This self-contained short story, explores the world of a traumatized girl and her struggle to grasp the elusive boundaries of reality that surround her. This thought-provoking piece delves into the profound themes of trauma, the search for belonging, and the intricate interplay between the human mind and the subjective nature of reality.",
      image:
        "https://www.pacificflying.com/wp-content/uploads/Magda-Ehlers-clouds.jpg",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1716555/209291d4f2948b3b4eb58b2a151d3b7b.pdf?",
      type: "fiction",
    },
    {
      id: 3,
      title: "The Wrong Time",
      author: "Adel Bedoud",
      description:
        "Creative Writing Short Story (1,500 words) - In this self-contained short story, we journey alongside a man as he reflects on a past relationship and contemplates the entirety of his life and how it has been a cycle of running. This captivating piece centres around the themes of heartbreak and constantly running from pain.",
      image:
        "https://www.pacificflying.com/wp-content/uploads/Magda-Ehlers-clouds.jpg",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1716504/59c8416bf85df034fe0fbc710de9c8d6.pdf?",
      type: "fiction",
    },
    {
      id: 4,
      title: "The Gift and the Curse",
      author: "Adel Bedoud",
      description:
        "Creative Writing Story Opening (3,000 words) - This is an introduction that presents the initial 3,000 words of a gothic horror story, immersing readers in the chilling tale of a kidnapped girl whose descent into fear unravels the mysteries behind her abduction. The story delves into the intricacies of the modern world, exploring the profound themes of belonging and the intrinsic values of things that truly matter to us.",
      image:
        "https://www.pacificflying.com/wp-content/uploads/Magda-Ehlers-clouds.jpg",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1716509/8c7bec9b1d02068ccf3e416cd59ebb75.pdf?",
      type: "fiction",
    },
    {
      id: 5,
      title: "Remember it All",
      author: "Adel Bedoud",
      description:
        "Creative Writing Short Story (1,500 words) - Drawing inspiration from Ernest Hemingway's 'Hills Like White Elephants', this self-contained short story delves into the evocative themes of time, memories, and mortality as a man embarks on a poignant visit to his ailing grandfather.",
      image:
        "https://www.pacificflying.com/wp-content/uploads/Magda-Ehlers-clouds.jpg",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1716494/d7dd45ae47686590f0e67ba52a1b2898.pdf?",
      type: "fiction",
    },
    {
      id: 6,
      title: "The Masquerade",
      author: "Adel Bedoud",
      description:
        "Creative Writing Story Opening (3,000 words) - This is the opening to a fantastical realm of a gripping tale, as we follow a man's descent into darkness while embarking on a treacherous quest for revenge. The themes of which explore intricate dynamics of revenge, the relentless cycle of violence, and the extraordinary lengths we are willing to traverse for both ourselves and our beloved ones.",
      image:
        "https://www.pacificflying.com/wp-content/uploads/Magda-Ehlers-clouds.jpg",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1716512/621d1fce353ff67cb3646e04bcac1271.pdf?",
      type: "fiction",
    },
    {
      id: 7,
      title: "The Gym Rat",
      author: "Adel Bedoud",
      description:
        "Non-Fiction Contemporary Essay (3,000 words) - This is a self-contained contemporary essay, written in the style of On Running by Larissa Pham. It delves deep into the complexities of pain, unveiling the profound ways in which humans willingly inflict a type of self-harm, all in pursuit of a pain that contrasts with the one imposed upon us by uncontrollable external forces.",
      image:
        "https://www.pacificflying.com/wp-content/uploads/Magda-Ehlers-clouds.jpg",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1716506/b6e580da290a07fe69ff9064d6e92b41.pdf?",
      type: "nonfiction",
    },
    {
      id: 8,
      title:
        "The British Empire & Miscarriages of Justice during the 20th Century",
      author: "Adel Bedoud",
      description:
        "LLB Law Dissertation (10,000) - This is my complete undergraduate dissertation for my undergraduate degree. The question posed and analysed was: How have miscarriages of justice in the second half of the 20th Century resulted in a lack of institutional trust within the British Colonies?",
      image:
        "https://www.pacificflying.com/wp-content/uploads/Magda-Ehlers-clouds.jpg",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1716519/6a02a7f69cc46a14b802b0d5875f94b7.pdf?",
      type: "nonfiction",
    },
  ]);

  const context = {
    works: works,
    worksAmount: works.length,
  };

  return (
    <WorkContext.Provider value={context}>
        {children}
    </WorkContext.Provider>
  );
}

export const useWorks = () => useContext(WorkContext);
