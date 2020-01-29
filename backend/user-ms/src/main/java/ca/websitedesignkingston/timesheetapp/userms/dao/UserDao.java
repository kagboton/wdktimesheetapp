package ca.websitedesignkingston.timesheetapp.userms.dao;

import ca.websitedesignkingston.timesheetapp.userms.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, String> {

    User findByLogin(String login);
}
