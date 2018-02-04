USE FreshMuffin;

DROP TABLE IF EXISTS `client`;

CREATE TABLE client (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  site_id VARCHAR(50) UNIQUE NOT NULL,
  phone VARCHAR(255),
  address VARCHAR(255) NOT NULL,
  latitude VARCHAR(255) ,
  longitude VARCHAR(255),
  date DATETIME NOT NULL
  -- ,time_window TIME
);
