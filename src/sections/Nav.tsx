import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import kobodrop from "../assets/logos/kobodrop_logo.svg";

function Nav() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex">
            <a href="#">
              <img src={kobodrop} alt="kobodrop logo" />
            </a>
            <div className="flex">
              <a href="#features">Features</a>
              <a href="#partners">Parnters</a>
              <a href="#reviews">Reviews</a>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
