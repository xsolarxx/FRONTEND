import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { ForumFigure } from '../../components';
import { getAll } from '../../services/forum.service';

export const ForumPage = () => {
  const navigate = useNavigate();
  const [forumList, setForumList] = useState();

  const fetchForums = async () => {
    setForumList(await getAll());
  };

  useEffect(() => {
    fetchForums();
  }, []);

  return (
    <div>
      <div>
        <h4>Renewable forums</h4>
        <p>
          Time to talk about renewable energies. Create your own forum or search for a
          topic of interest and contribute.
        </p>
      </div>
      <button onClick={() => navigate('/forum')}>Create your own forum</button>
      <section>
        {forumList &&
          forumList.data.map((forum, index) => <ForumFigure forum={forum} key={index} />)}
      </section>
    </div>
  );
};
