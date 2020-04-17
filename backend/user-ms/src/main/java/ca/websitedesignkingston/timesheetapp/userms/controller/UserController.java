package ca.websitedesignkingston.timesheetapp.userms.controller;

import ca.websitedesignkingston.timesheetapp.userms.dao.UserDao;
import ca.websitedesignkingston.timesheetapp.userms.domain.User;
import ca.websitedesignkingston.timesheetapp.userms.exceptions.UserNotFoundException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.net.URI;
import java.util.List;


@Api("API for CRUD operations on a user")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserDao userDao;

    //Users
    @ApiOperation(value = "Get all the users registered")
    @GetMapping(value = "users")
    public List<User> findUsers(){
        return userDao.findAll();
    }

    //Users/{login}
    @ApiOperation(value = "Get a specific user by his login")
    @GetMapping(value = "users/{login}")
    public User findUser(@PathVariable String login) throws UserNotFoundException {
        User user = userDao.findByLogin(login);
        if (user == null){
            throw new UserNotFoundException("The user " + login + "does not existe");
        }
       return user;
    }

    @ApiOperation(value = "Register a user")
    @PostMapping(value = "users")
    public ResponseEntity<User> register(@RequestBody User user){

        if (StringUtils.isEmpty(user.getLogin())){
            return ResponseEntity.badRequest().build();
        }

        if (this.userDao.findByLogin(user.getLogin()) == null) {
            return ResponseEntity.ok().body(userDao.save(user));
        }

        return ResponseEntity.badRequest().build();
    }

    @ApiOperation(value = "Delete a specific user from the system")
    @DeleteMapping (value = "/users/{login}")
    public ResponseEntity<Void> deleteUser(@PathVariable String login) {
        userDao.deleteById(login);
        return ResponseEntity.noContent().build();
    }

    @ApiOperation(value = "Update user details")
    @PutMapping (value = "/users/update/{login}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable String login) {
        if (!StringUtils.isEmpty(login)) {
            User user1 = this.userDao.findByLogin(login);
            user1.setFirstname(user.getFirstname());
            user1.setLastname(user.getLastname());
            user1.setEmail(user.getEmail());
            user1.setPassword(user.getPassword());

            return ResponseEntity.ok().body(this.userDao.save(user1));
        }
        return ResponseEntity.badRequest().build();
    }
}
