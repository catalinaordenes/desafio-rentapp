import { Navigate } from 'react-router-dom';
import InicioScreen from '../screens/InicioScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CharactersScreen from '../screens/CharactersScreen';
import EpisodesScreen from '../screens/EpisodesScreen';
import LocationsScreen from '../screens/LocationsScreen';
import DetailCharacterScreen from '../screens/DetailCharacterScreen';
import DetailEpisodeScreen from '../screens/DetailEpisodeScreen';
import DetailLocationScreen from '../screens/DetailLocationScreen';

const publicRoutes = [
    {
        key:  "0-0",
        path: "/",
        component: <InicioScreen />
    },
    {
        key:  "0-1",
        path: "/login",
        component: <LoginScreen />
    },
    {
        key:  "0-2",
        path: "/register",
        component: <RegisterScreen />
    },
    {
        key:  "0-3",
        path: "*",
        component: <Navigate to="/" replace />
    }
]

const privateRoutes = [
    {
        key: 1,
        path: "/characters",
        component: <CharactersScreen />
    },
    {
        key: 2,
        path: "/episodes",
        component: <EpisodesScreen />
    },
    {
        key: 3,
        path: "/locations",
        component: <LocationsScreen />
    },
    {
        key: 4,
        path: "/detailcharacter/:characterId",
        component: <DetailCharacterScreen />
    },
    {
        key: 5,
        path: "/detailepisode/:episodeId",
        component: <DetailEpisodeScreen />
    },
    {
        key: 6,
        path: "/detaillocation/:locationId",
        component: <DetailLocationScreen />
    },
    {
        key:  7,
        path: "*",
        component: <Navigate to="/" replace />
    }
]

export { publicRoutes, privateRoutes }