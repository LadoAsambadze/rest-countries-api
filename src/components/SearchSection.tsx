import { styled } from "styled-components";

export default function SearchSection({
  mode,
  setMode,
  content,
  setContent,
  active,
  setActive,
  name,
  setName,
}) {
  const filterHandler = (e) => {
    setContent(e.target.textContent);
    setActive(!active);
  };
  return (
    <>
      <SearchSectionMain>
        <SearchbarMain style={{ background: mode ? "#2B3844" : "#FFF" }}>
          <SearchField>
            <SearchIcon src="public/search-icon.svg" alt="search icon, loop" />
            <SearchInput
              modeCheck={mode}
              style={{
                background: mode ? "#2B3844" : "#FFF",
                color: mode ? "#FFF" : "#161515",
              }}
              placeholder="Search for a country…"
              onChange={(e) => setName(e.target.value)}
            />
          </SearchField>
        </SearchbarMain>
        <FilterField
          style={{ background: mode ? "#2B3844" : "#FFF" }}
          onClick={() => setActive(!active)}
        >
          <Region style={{ color: mode ? "#FFF" : "#111517" }}>
            {content}
          </Region>
          <Arrow
            src={mode ? "/arrow-dark.svg" : "/arrow.svg"}
            alt="arrow button"
          />
          <RegionList
            style={{
              display: active ? "flex" : "none",
              background: mode ? "#2B3844" : "#FFF",
            }}
          >
            <RegionName
              onClick={filterHandler}
              style={{ color: mode ? "#FFF" : "#111517" }}
            >
              Filter by Regions(All)
            </RegionName>
            <RegionName modeCheck={mode} onClick={filterHandler}>
              Africa
            </RegionName>
            <RegionName modeCheck={mode} onClick={filterHandler}>
              Americas
            </RegionName>
            <RegionName modeCheck={mode} onClick={filterHandler}>
              Asia
            </RegionName>
            <RegionName modeCheck={mode} onClick={filterHandler}>
              Europe
            </RegionName>
            <RegionName modeCheck={mode} onClick={filterHandler}>
              Oceania
            </RegionName>
          </RegionList>
        </FilterField>
      </SearchSectionMain>
    </>
  );
}

const SearchSectionMain = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const SearchbarMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px 16px 32px;
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const SearchField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 1440px) {
    padding-right: 20px;
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchInput = styled.input`
  width: 80%;
  border: none;
  margin-left: 26px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  outline: none;
  &::placeholder {
    color: ${(props) => (props.modeCheck ? "#fff" : "#C4C4C4")};
  }
  @media (min-width: 1440px) {
    width: 400px;
  }
`;

const FilterField = styled.div`
  padding: 14px 19px 14px 24px;
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (min-width: 1440px) {
    width: 10%;
    margin: 0;
  }
`;

const Region = styled.span`
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Arrow = styled.img`
  width: 10px;
  height: 10px;
`;

const RegionList = styled.div`
  padding: 16px 19px 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  margin-top: 4px;
  width: 80%;
  left: 0;
  top: 55px;
  position: absolute;
  @media (min-width: 1440px) {
  }
`;

const RegionName = styled.span`
  color: ${(props) => (props.modeCheck ? "#fff" : "#111517")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 8px;
  cursor: pointer;
`;
