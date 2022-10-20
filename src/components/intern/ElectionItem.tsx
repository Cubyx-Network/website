import { Candidate, Election, TeamMember, Vote } from "@prisma/client";
import React, { useState } from "react";
import redaxios from "redaxios";

const ElectionItem = ({
  election,
  user,
}: {
  election: Election & {
    votes: Vote[];
    candidates: (Candidate & { user: TeamMember })[];
  };
  user: TeamMember;
}) => {
  const voted = election.votes.find(
    (vote) => vote.userId === user.id && vote.electionId === election.id
  );

  const [vote, setVote] = useState<string | null>(voted ? voted.id : null);
  const [tempVote, setTempVote] = useState<string | null>(null);

  function onUpdateChecked(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setTempVote(event.target.value);
    } else {
      setTempVote(null);
    }
  }

  function submit() {
    setVote(tempVote);
    redaxios({
      method: "POST",
      url: "/api/election/vote",
      data: {
        electionId: election.id,
        candidateId: tempVote,
      },
    }).then((r) => {});
  }

  return (
    <div className="round-lg flex flex-col items-center rounded-xl bg-background-secondary p-4 dark:bg-background-secondary">
      <h1 className="text-2xl font-bold">{election.name}</h1>
      <p className="text-lg text-text-third">{election.description}</p>
      {vote === null ? (
        <>
          <ul>
            {election.candidates &&
              election.candidates.map((candidate) => (
                <div key={candidate.id} className="flex w-full gap-2">
                  <input
                    type="checkbox"
                    checked={tempVote === candidate.id}
                    value={candidate.id}
                    onChange={onUpdateChecked}
                    disabled={voted !== undefined}
                  />
                  <span>{candidate.user.username}</span>
                </div>
              ))}
          </ul>
          <input
            className="input mt-4 hover:cursor-pointer"
            type="submit"
            value="Abstimmen"
            onClick={submit}
          />
        </>
      ) : (
        <>
          <p className="mt-4">Du hast erfolgreich abgestimmt ✅</p>
        </>
      )}
    </div>
  );
};

export default ElectionItem;
